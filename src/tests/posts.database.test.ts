import Posts from '../Database/Posts.db'
import {expect} from 'chai'

describe("Get all posts", () => {
    it('Should return an array', () => {
        let res = Posts.getAllPosts();
        res.then((row) => console.log(row))
    })
});