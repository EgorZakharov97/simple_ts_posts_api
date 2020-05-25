import express, {Application} from 'express';

// ROUTES
import indexRoutes from './routes/index.routes';
import postsRoutes from './routes/post.route';

export class App {
    private app: Application;

    constructor(private port?: number) {
        this.app = express();
        this.setup();
        this.middlewares();
        this.routs();
    }

    private setup(): void {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares(): void {

    }

    private routs(): void {
        this.app.use(indexRoutes);
        this.app.use('/posts', postsRoutes);
    }

    public async listen() {
        await this.app.listen(this.app.get('port'));
        console.log(`Node ${process.pid} is running on port ${process.env.PORT}`);
    }
}