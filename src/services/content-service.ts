import axios from 'axios';

const publicUrl = process.env.PUBLIC_URL;

const getContent = (routePath: string) => {
  return new Promise((res, rej) => {
    let content: any = {};
    let contentPath = `${publicUrl}/content/${routePath}`;
    axios.get(`${contentPath}/index.json`).then((response) => {
      content = response.data;
      if (content.refs && content.refs.length) {
        let refPromises = content.refs.map((ref: any) => {
          return axios.get(`${contentPath}/${ref.file}`).then((fc) => {
            content[ref.name] = fc.data;
          });
        });
        Promise.all(refPromises).then(() => {
          res(content);
        })
      }else{
        res(content);
      }
    });
  });


};

export  { getContent };
