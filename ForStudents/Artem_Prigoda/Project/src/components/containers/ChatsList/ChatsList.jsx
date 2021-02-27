
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import './style.scss';

import ChatsDialog from '@components/ChatsDialog';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default class Chatslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChats: [
                { id: '1', name: "User1" },
                { id: '2', name: "User2" },
                { id: '3', name: "User3" },
            ],
            contactList: [
                { id: '4', name: "User4" },
                { id: '5', name: "User5" },
            ]

        };
    }

    addChat = (id) => {
        const { contactList } = this.state;
        const { activeChats } = this.state;
        const ind = contactList.findIndex(item => item.id === id);
        activeChats.push(...contactList.splice(ind, 1));

        this.setState({ activeChats });
        this.setState({ contactList });
    }
    render() {
        const { activeChats } = this.state;
        const ActiveChats = activeChats.map(item =>
            <ListItemLink href={`/chat/${item.id}`} key={item.id}>
                <ListItemText primary={item.name} />
            </ListItemLink>

        );
        return <div className="chatslist">

            {/* <List component="nav" aria-label="secondary mailbox folders"> */}
            {ActiveChats}

            {/* </List> */}

            <ChatsDialog add={this.addChat} list={[...this.state.contactList]} />
        </div>;
    }
};
