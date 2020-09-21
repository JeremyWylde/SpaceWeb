import {api} from '../3_dal/api'
import convert from 'xml-js'

const initialState = {
    news: []
}

const SET_NEWS = 'SET_NEWS'

export const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_NEWS:
            return {
                ...state,
                news: action.news
            };
        default:
            return state
    }
};

export const setNewsAction = (news) => ({
    type: SET_NEWS,
    news
})

export const getNewsThunk = () => {
    return async (dispatch) => {
        try {
            const res = await api.getNews()
            let parser = convert.xml2json(res.data, {compact: true, spaces: ''})
            parser = JSON.parse(parser)
            let news = []
            for(let i=0; i < parser.rss.channel.item.length; i++) {
                news.push(
                    {
                        content: parser.rss.channel.item[i]['turbo:content']['_cdata'],
                        title: parser.rss.channel.item[i].title['_text']
                    })
            }
            /*let p = new DOMParser()
            let xmlDoc = p.parseFromString(a,"text/xml");*/

            dispatch(setNewsAction(news))
        } catch (e) {
            alert(e)
        }
    }
}

export default newsReducer;
