function WebCall(time: number): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(resolve, time));
}

class WebService {
    makeCallUsingPromise(): void {
        WebCall(3000)
            .then(() => console.log(`Done promise`))
            .catch(() => console.log(`Failed`));
    }

    async makeCallUsingAsyncAwait() {
        try {
            await WebCall(3000);
            console.log(`Done with async/await`);
        } catch (error) {
            console.log(`Caught ${error}`);
        }
        
    }
}

console.log(`let call service using promise.`);
new WebService().makeCallUsingPromise();
console.log(`service has just been called.`);
console.log(`let call service using async/await.`);
new WebService().makeCallUsingAsyncAwait();
console.log(`service has just been called again.`);

