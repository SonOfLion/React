import React,{Component} from 'react';

const serverUrl = 'https://api.github.com/users';

class User extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        const { userId } = this.props.match.params;
        this.fetchOfUser(userId);
    };

    componentDidUpdate(prevProps){
        const { userId } = this.props.match.params;
        if(userId !== prevProps.match.params.userId)
        this.fetchOfUser(userId);
    };

    fetchOfUser = (userId) => {
        fetch(`${serverUrl}/${userId}`)
            .then((resonse) => resonse.json())
            .then((result) =>
            this.setState({
            user: result
        })
    );
};
    render() {
    let { user } = this.state;
    
    if (!user){
        return null;
    }

    const { avatar_url, name, location } = user;

    return (
        <div className="user">
                <img alt="User Avatar" src={`${avatar_url}`} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    );
    };
};

export default User;