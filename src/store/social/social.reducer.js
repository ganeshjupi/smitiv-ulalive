import { SocialActionTypes } from "./social.model";
require('dotenv').config();

export const initialState = {
    isLoading: false,
    createLiveStreamResponse: {},
    topLiveStreams: [],
    homeTopLiveStreams: [],
    recentLiveStreams: [],
    followingLiveStreams: [],
    justLiveStreams: [],
    livestreams: [],
    bookMarks: [],
    events: [],
    reactions: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SocialActionTypes.JUST_LIVESTREAM_REQUEST:
        case SocialActionTypes.FETCH_REACTION_REQUEST:
        case SocialActionTypes.CREATE_BOOKMARK_REQUEST:
        case SocialActionTypes.DELETE_BOOKMARK_REQUEST:
        case SocialActionTypes.FETCH_EVENT_REQUEST:
        case SocialActionTypes.FOLLOWING_LIVESTREAM_REQUEST:
        case SocialActionTypes.FETCH_LIVESTREAM_ID_REQUEST:
        case SocialActionTypes.RECENT_LIVESTREAM_REQUEST:
        case SocialActionTypes.TOP_RECOMMENDED_LIVESTREAM_REQUEST:
        case SocialActionTypes.TOP_RECOMMENDED_HOMELIVESTREAM_REQUEST:
        case SocialActionTypes.FETCH_BOOKMARK_REQUEST:
        case SocialActionTypes.CREATE_LIVESTREAM_REQUEST:
        case SocialActionTypes.CREATE_WOWZA_REQUEST:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }

        case SocialActionTypes.FETCH_EVENT_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true,
                    events: action.payload.data
                });
            }

        case SocialActionTypes.FETCH_LIVESTREAM_REQUEST:
            {
                return Object.assign({}, state, {
                    isLoading: true,
                    livestreams: []
                });
            }

        case SocialActionTypes.FOLLOWING_LIVESTREAM_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true,
                    followingLiveStreams: action.payload.data
                });
            }

        case SocialActionTypes.FETCH_LIVESTREAM_ID_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    createLiveStreamResponse: action.payload.data
                });
            }

        case SocialActionTypes.TOP_RECOMMENDED_LIVESTREAM_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    topLiveStreams: action.payload.data.data
                });
            }

        case SocialActionTypes.TOP_RECOMMENDED_HOMELIVESTREAM_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    homeTopLiveStreams: action.payload.data.data
                });
            }

        case SocialActionTypes.JUST_LIVESTREAM_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    justLiveStreams: action.payload.data
                });
            }

        case SocialActionTypes.FETCH_LIVESTREAM_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    livestreams: action.payload.data
                });
            }

        case SocialActionTypes.RECENT_LIVESTREAM_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    recentLiveStreams: action.payload.data
                });
            }

        case SocialActionTypes.FETCH_BOOKMARK_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    bookMarks: action.payload.data.data
                });
            }

        case SocialActionTypes.CREATE_BOOKMARK_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    createLiveStreamResponse: { ...state.createLiveStreamResponse, isBookmark: true }
                });
            }

        case SocialActionTypes.DELETE_BOOKMARK_SUCCESS:
            {
                let x = state.createLiveStreamResponse;
                if (action.payload.listBookmarkId.indexOf(x._id) > -1) {
                    x.isBookmark = false;
                }
                return Object.assign({}, state, {
                    isLoading: false,
                    createLiveStreamResponse: x
                });
            }

        case SocialActionTypes.UPDATE_EVENT_INTERNAL:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    events: [...state.events, action.payload]
                });
            }

        case SocialActionTypes.FETCH_REACTION_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    reactions: action.payload.data
                });
            }

        case SocialActionTypes.CREATE_WOWZA_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    createLiveStreamResponse: { ...state.createLiveStreamResponse, streamingStatus: "Streaming" }
                });
            }

        case SocialActionTypes.CREATE_LIVESTREAM_SUCCESS:
            {
                let recentLiveStreams = state.recentLiveStreams;
                let topLiveStreams = state.topLiveStreams;
                recentLiveStreams.push(action.payload.data);
                topLiveStreams.push(action.payload.data);
                return Object.assign({}, state, {
                    isLoading: false,
                    createLiveStreamResponse: action.payload.data,
                    recentLiveStreams: recentLiveStreams,
                    topLiveStreams: topLiveStreams
                });
            }

        case SocialActionTypes.CREATE_BOOKMARK_FAILURE:
        case SocialActionTypes.FETCH_REACTION_FAILURE:
        case SocialActionTypes.DELETE_BOOKMARK_FAILURE:
        case SocialActionTypes.CREATE_WOWZA_FAILURE:
        case SocialActionTypes.FETCH_EVENT_FAILURE:
        case SocialActionTypes.FOLLOWING_LIVESTREAM_FAILURE:
        case SocialActionTypes.FETCH_LIVESTREAM_ID_FAILURE:
        case SocialActionTypes.RECENT_LIVESTREAM_FAILURE:
        case SocialActionTypes.FETCH_LIVESTREAM_FAILURE:
        case SocialActionTypes.JUST_LIVESTREAM_FAILURE:
        case SocialActionTypes.TOP_RECOMMENDED_LIVESTREAM_FAILURE:
        case SocialActionTypes.TOP_RECOMMENDED_HOMELIVESTREAM_FAILURE:
        case SocialActionTypes.FETCH_BOOKMARK_FAILURE:
        case SocialActionTypes.CREATE_LIVESTREAM_FAILURE:
            {
                return Object.assign({}, state, {
                    isLoading: false
                });
            }

        default:
            {
                return state;
            }
    }
};

export { reducer as SocialReducer };