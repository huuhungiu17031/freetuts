export class CourseDetail {
    id: String;
    title: String;
    description: String;
    categoryID: String;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.categoryID = obj && obj.subCategory || null;
    }
}