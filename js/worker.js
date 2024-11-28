self.onmessage = (event) => {
    const MAX_ITER = event.data.maxIter;
    const CHUNK_SIZE = 100_000;
    let current = 0;

    function processChunk() {
        const end = Math.min(current + CHUNK_SIZE, MAX_ITER);
        for (let i = current; i < end; i++) {
            const temp = Math.sqrt(i) * Math.sqrt(i);
        }

        current = end;
        self.postMessage({ progress: Math.round((current / MAX_ITER) * 100) });

        if (current < MAX_ITER) {
            setTimeout(processChunk, 0);
        } else {
            self.postMessage({ done: true });
        }
    }

    processChunk();
};
