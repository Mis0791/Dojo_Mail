export class Email {
    email: string;
    importance: string;
    subject: string;
    content: string;
    constructor(email:string, importance: boolean, subject:string, content:string) {
        this.email = email;
        this.subject = subject;
        this.content = content;

        if(importance == true){
            this.importance = 'High'
        } else {
            this.importance = 'Low'
        }
    }
}
