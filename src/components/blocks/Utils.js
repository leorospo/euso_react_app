export function search(str) {

    let userChats = [
        {
            userFullName: 'Carol Evans',
            userRole: 'Risk Management',
            userProfileImg: '1_carol.jpg',
            chatLastMessage: {
                text: 'Hello world!',
                time: '10:30',
            },
            unreadCount: '5',
            silenced: true,
            favorited: true,
            id: 1
        },
        {
            userFullName: 'Bonfiglio Alberto',
            userRole: 'Risk Management',
            userProfileImg: '1_carol.jpg',
            chatLastMessage: {
                text: 'Hello world!',
                time: '21:30',
            },
            unreadCount: '0',
            silenced: true,
            favorited: true,
            id: 2
        },
        {
            userFullName: 'Bruni Carla',
            userRole: 'Risk Management',
            userProfileImg: '1_carol.jpg',
            chatLastMessage: {
                text: 'Hello world!',
                time: '18:10',
            },
            unreadCount: '105',
            silenced: false,
            favorited: false,
            id: 3
        },
    ]
          
          
         

    var results = userChats.filter(function (el) {
        return (el.userFullName.toLocaleLowerCase().includes(str.toLocaleLowerCase()));
    });

return results

}


