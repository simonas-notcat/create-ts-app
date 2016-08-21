import App from '../components/containers/App';

describe("Using Typescript", ()=>{
    it("Very Simple test", ()=>{
        expect(App).toBeDefined();
        expect(true).toBeTruthy();
    })
});