export class CategoryDetail {
    id: string;
    title: string;
    children: any[];
    
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.children = obj && obj.children || null;
    }
}