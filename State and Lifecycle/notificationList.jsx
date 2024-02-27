import React from "react";
import Notification from "./notification";

const NotificationMessage = [
    {
        id: 1,
        message: "오늘의 일정은 없어요",
    },
    {
        id: 2,
        message: "오늘의 일정은 없어요",
    },
    {
        id: 3,
        message: "오늘의 일정은 없어요",
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < NotificationList.length) {
                const index = notifications.length;
                notifications.push(NotificationList[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                                key={notification.id}
                                id = {notification.id}
                                message = {notification.message}
                            />
                })}
            </div>
        );
    }
}