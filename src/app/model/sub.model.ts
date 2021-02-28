import { CourseDetail } from "./course.model";
import { PostDetail } from "./post.model";

export class SubDetail {
    id: String;
    title: String;
    description: String;
    category: String;
    courses: CourseDetail[];
    posts: PostDetail[];
    courseDetail: [];
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.category = obj && obj.category || null;
        this.courses = obj && obj.courses || null;
        this.posts = obj && obj.posts || null;
        this.courseDetail = obj && obj.courseDetail || null;
    }
}