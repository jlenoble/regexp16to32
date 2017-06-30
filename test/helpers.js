import u16to32 from '../src/u16to32';
import Muter, {muted} from 'muter';

export function makeTests ({dir, files}) {
  const muter = Muter(process.stderr, 'write'); // eslint-disable-line

  files.forEach(file => {
    it(`Parsing file ${file}`, muted(muter, function () {
      return new Promise((resolve, reject) => {
        u16to32(`${dir}/${file}`)
          .on('error', reject)
          .on('finish', () => {
            const logs = muter.getLogs();
            muter.forget();

            if (logs) {
              reject(new Error(logs));
            } else {
              console.log('');
              resolve();
            }
          });
      });
    }));
  });
}
