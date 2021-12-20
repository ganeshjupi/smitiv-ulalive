import moment from "moment";
import _ from "underscore";
export function getTopLiveStreams(state) {
    return state.SocialReducer.topLiveStreams;
}

export function getHomeTopLiveStreams(state) {
    return state.SocialReducer.homeTopLiveStreams;
}

export function getRecentLiveStreams(state) {
    return state.SocialReducer.recentLiveStreams;
}

export function getJustLiveStreams(state) {
    return state.SocialReducer.justLiveStreams;
}

export function getFollowingStreams(state) {
    return state.SocialReducer.followingLiveStreams;
}

export function getLiveStream(state) {
    return state.SocialReducer.createLiveStreamResponse;
}

export function getLiveStreams(state) {
    return state.SocialReducer.livestreams;
}

export function getBookMarks(state) {
    return state.SocialReducer.bookMarks;
}

export function getEvents(state) {
    let events = state.SocialReducer.events;
    events = _.sortBy(events, (item) => {
        return new moment(item.dateCreated);
    }).reverse()
    return events;
}


export function getReactions(state) {
    return state.SocialReducer.reactions;
}