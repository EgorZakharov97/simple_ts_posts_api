import Database from '../Database/Database'
import {expect} from 'chai'

describe("Checking database connection", () => {
    it('Should connect', () => {
        expect(Database.isConnected()).to.equal(true);
    })
});