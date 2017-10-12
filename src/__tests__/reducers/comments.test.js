import commentReducer from '../../reducers/comments';
import { SAVE_COMMENT } from '../../actions/types';

describe('Comments Reducer', () => {
    it('hanldes action with unknown type', () => {
        expect(commentReducer(undefined, {})).toEqual([]);
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' };
        expect(commentReducer([], action)).toEqual(['new comment']);
    });
});
