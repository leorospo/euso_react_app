import Firebase from 'firebase';
import { eusoConvertTimeHHmm, eusoConvertTime } from './utility'

// Initialize Firebase
var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

};

Firebase.initializeApp(config);
var db = Firebase.firestore();


export const logout = () => {
    return Firebase.auth().signOut()
}

export const login = (email, password) => {
    return Firebase.auth().signInWithEmailAndPassword(email, password)
}

export const getUsers = () => {
    return db.collection("users").get().then((users) => {
        var output = {}
        users.forEach(
            (doc) => output[doc.id] = doc.data()
        )
        return output
    })
}

// YOU CAN PROBABLY FIND WHAT YOU NEED IN THE APP STATE (users)
export const getUser = (id) => {
    return db.collection("users").doc(id).get()
        .then(function (doc) {
            if (doc.exists) {
                return doc.data();
            } else {
                console.log("No such user!", id);
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        })
}

export const getChat = (id) => {
    return db.collection("chats").doc(id).get()
        .then(function (doc) {
            if (doc.exists) {
                return doc.data();
            } else {
                console.log("No such chat!", id);
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        })
}

export const getMessage = (id) => {
    return db.collection("messages").doc(id).get()
        .then(function (doc) {
            if (doc.exists) {
                return doc.data();
            } else {
                console.log("No such message!", id);
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        })
}

export const getChatLastMessage = (chatId) => {
    return db.collection("messages").where('chatId', '==', chatId).orderBy('time', 'desc').get()
        .then((coll) => coll.docs[0].data()
        )
}

// NOT COMPLETED
export const getUserChats = (wksId, userId, callback, users) => {
    db.collection("chats").where("participants", "array-contains", userId)
        .onSnapshot(function (coll) {
            var output = []
            var requestedMessages = []

            coll.forEach(el => {
                var reqMessage = [
                    el.id,
                    getChat(el.id),
                    getChatLastMessage(el.id),
                    el.data().participants.filter((el) => el !== userId)[0],
                ]

                requestedMessages.push(
                    Promise.all(reqMessage)
                )

            })

            Promise.all(requestedMessages).then(
                messages => {
                    messages.forEach((msg) => {

                        let id = msg[0]
                        let chat = msg[1]
                        let lastMessage = msg[2]
                        let otherUserId = msg[3]
                        const otherUser = users[otherUserId]

                        eusoConvertTime(lastMessage.time)

                        output.push(
                            {
                                id: id,
                                userFullName: otherUser.userFullName,
                                userProfileImg: otherUser.profileImg,
                                chatLastMessage: {
                                    text: lastMessage.text,
                                    time: eusoConvertTimeHHmm(lastMessage.time),
                                },
                                unreadCount: '0',
                                silenced: chat.silenced ? (chat.silenced.filter(el => el === userId)[0] || false) : false, //non leggibile
                                favorited: chat.favorited ? (chat.favorited.filter(el => el === userId)[0] || false) : false,

                            }
                        )
                    })
                    callback(output)
                }
            )
        });
}

export const sendMessages = (senderId, chatId, text, time) => {
    db.collection('messages').add({
        chatId, senderId, text, time,
    })

        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

export const getMessages = (userId, chatId, callback) => {

    db.collection("messages").where("chatId", "==", chatId).orderBy("time", "desc")
        .onSnapshot((snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push(
                    {
                        received: doc.data().senderId === userId ? false : true,
                        text: doc.data().text,
                        time: doc.data().time.toDate().toLocaleTimeString().slice(0, 4),
                    }
                )
                callback(messages)
            })

        })
}
