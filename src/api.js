import Firebase from 'firebase';

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

// WIP ramo leo
export const getChatLastMessage = (chatId) => {
    return db.collection("messages").where('chatId', '==', chatId).orderBy('time', 'desc')


    /*         .doc(id).get()
            .then(function (doc) {
                if (doc.exists) {
                    return doc.data();
                } else {
                    console.log("No such message!", id);
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            }) */
}

// NOT COMPLETED
export const getUserChats = (wksId, userId, callback, users) => {
    db.collection("chats").where("participants", "array-contains", userId)
        .onSnapshot(function (coll) {
            var output = []
            var requests = []
            coll.forEach(el => {
                const otherUserId = el.data().participants.filter((el) => el != userId)[0]
                requests.push(
                    getChat(el.id).then((chat) => {

                        const isSilenced = chat.silenced ? (chat.silenced.filter(el => el == userId)[0] || false) : false //non leggibile
                        const isFavorited = chat.favorited ? (chat.favorited.filter(el => el == userId)[0] || false) : false //non leggibile
                        const user = users[otherUserId]

                        // WIP ramo leo
                        //getChatLastMessage(chat.id).then((data) => console.log(data))

                        output.push(
                            {
                                id: el.id,
                                userFullName: user.userFullName,
                                userProfileImg: user.profileImg,
                                chatLastMessage: {
                                    text: 'Hello world!',
                                    time: '21:30',
                                },
                                unreadCount: '0',
                                silenced: isSilenced,
                                favorited: isFavorited,

                            }
                        )
                    })
                )
            })

            Promise.all(requests).then(
                () => callback(output)
            )
        });
}