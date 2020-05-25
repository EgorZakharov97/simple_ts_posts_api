import {App} from './app';
import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';

dotenv.config();
const numCpus = os.cpus().length;

function main (): void {
    if(cluster.isMaster){
        console.log('The master process has pid ' + process.pid);
        for( let i = 0; i < numCpus-1; i++){
            const worker = cluster.fork();
            worker.on('exit', () => {
                console.log(`Worker ${worker.process.pid} has died!`);
                cluster.fork();
            })
        }
    } else {
        const app: App = new App;
        app.listen();
    }
}

main();