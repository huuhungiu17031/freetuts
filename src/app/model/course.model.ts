import { PostDetail } from './post.model';
export class CourseDetail {
    id: String;
    title: String;
    description: String;
    subCategory: String;
    posts: PostDetail[];
    courseDetail: []
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.subCategory = obj && obj.subCategory || null;
        this.posts = obj && obj.posts || null;
        this.courseDetail = obj && obj.courseDetail || null;
    }
}