interface IStream {
    ReadStream(): Int8Array;
}

class Data<T extends IStream> {
    ReadStream(stream: T){
        let output = stream.ReadStream();
        console.log(output.byteLength);
    }
}

class WebStream implements IStream {
    ReadStream(): Int8Array {
        let array: Int8Array = new Int8Array(8);
        for (let i: number = 0; i < array.length; i++) {
            array[i] = i + 3;
        }
        return array;
    }
}

class DiskStream implements IStream {
    ReadStream(): Int8Array {
        let array: Int8Array = new Int8Array(20);
        for (let i: number = 0; i < array.length; i++) {
            array[i] = i + 3;
        }
        return array;
    }
}

const webStream = new Data<WebStream>();
const diskStream = new Data<DiskStream>();

webStream.ReadStream(new WebStream);
diskStream.ReadStream(new DiskStream);