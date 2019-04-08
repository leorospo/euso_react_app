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

export const getUser = (id, callback) => {
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

// NOT COMPLETED
export const getUserChats = (wksId, userId, callback) => {
    db.collection("chats").where("participants", "array-contains", userId)
        .onSnapshot(function (coll) {
            var output = []
            var requests = []
            coll.forEach(el => {
                const otherUserId = el.data().participants.filter((el) => el != userId)[0]
                requests.push(
                    getUser(otherUserId).then((user) => {
                        output.push(
                            {
                                userFullName: user.userFullName,
                                userProfileImg: user.profileImg,
                                chatLastMessage: {
                                    text: 'Hello world!',
                                    time: '21:30',
                                },
                                unreadCount: '0',
                                silenced: true,
                                favorited: true,

                            }
                        );
                    })
                );
            })

            Promise.all(requests).then(
                () => callback(output)
            )
        });
}




