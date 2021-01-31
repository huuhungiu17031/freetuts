export class PostDetail {
    id: String;
    title: String;
    description: String;
    courseModelID: String;
    imageURL: String;
    createAt: String;
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.courseModelID = obj && obj.courseModelID || null;
        this.imageURL = obj && obj.imageURL || null;
        this.createAt = obj && obj.createAt || null;
    }
}