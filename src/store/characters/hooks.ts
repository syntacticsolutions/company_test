import _ from 'lodash';
import { initialState } from "./reducer"
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {fetch} from './actions'

type State = {
    characterReducer: typeof initialState
}

export const characterPaths = {
    data: 'characterReducer.data',
    pages: 'characterReducer.pages',
    count: 'characterReducer.count',
}

export const useCharacters = (characters?: string[]) => {
    const { data, pages, count } = useSelector((state: State) => {
        return {
            data: _.get(state, characterPaths.data),
            pages: _.get(state, characterPaths.pages),
            count: _.get(state, characterPaths.count)
        }
    })

    const dispatcher = useDispatch()

    const dispatch = useCallback((ids = []) => {
        dispatcher(fetch(ids));
    }, [characters])

    useEffect(() => {
        const characterIds = ((characters || []) as string[])?.map((char) => char.split('/').pop())
        dispatch(characterIds as string[] as any);
    }, [characters])

    return {
        characters: data,
        pages,
        count
    }
}