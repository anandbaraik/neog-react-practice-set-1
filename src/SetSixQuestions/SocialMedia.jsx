import React, { useEffect, useState } from 'react'
import { fetchSocialMedia } from './API/fetchSocialMedia';

const SocialMedia = () => {
    const [user, setUser] = useState({});
    const [isFollowed, setIsFollowed] = useState(false);
    const fetchUser = async () => {
        try {
            const {data:{profile}} = await fetchSocialMedia('https://example.com/api/profile');

            if(profile) setUser(profile);

        } catch (error) {
            console.error(`Error - ${error.message}`)
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const increaseFollower = () => {
        setUser({...user, followers: user.followers + 1})
        setIsFollowed(true);
    }

  return (
    <div>
        <h2>SocialMedia</h2>
        <h3>
            {user.name}
        </h3>
        <div>
            <strong>Age</strong> : {user.age}
        </div>
        <div>
            <strong>Gender</strong> : {user.gender}
        </div>
        <div>
            <strong>Email</strong> : {user.email}
        </div>
        <div>
            <strong>Occupation</strong> : {user.occupation}
        </div>
        <div>
            <strong>Followers</strong> : {user.followers}
        </div>
        <div>
            <strong>Followed BY</strong> : {user.followedBy}
        </div>
        <button onClick={increaseFollower}
            disabled={isFollowed}>
            Follow John
        </button>
    </div>
  )
}

export default SocialMedia