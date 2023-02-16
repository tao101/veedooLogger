const fetch = require('node-fetch')


async function log(message, type, fiberyHost, fiberyToken, fiberyProjectId) {
  try {
    let typeId = null;

    switch (type) {
      case 'warning':
        typeId = '1f7a60d1-a6c7-11ed-9d94-b91e86b22cf1';
        break;
      case 'error':
        typeId = '22157e11-a6c7-11ed-9d94-b91e86b22cf1';
        break;
      default:
        typeId = 'db61f980-a6c6-11ed-9d94-b91e86b22cf1';
    }

    // const schema = await fibery.getSchema();
    // let jsonSchema = JSON.stringify(schema);
    // fs.writeFile('schema.json', jsonSchema, 'utf8', () => {});
    // console.log(schema);

    let query = `mutation {
              logs {
                create(
                state: {
                  id : { is : "9e47c600-a6c7-11ed-9d94-b91e86b22cf1" }
                }
                project:{
                  id : { is : "${fiberyProjectId}" }
                }
                  type:{
                    id : { is : "${typeId}" } 
                  }
                  
                ){
                  entities {
                    id
                    type
                  }
                }
              }
            }`;

    let YOUR_SPACE_ENDPOINT =
      'https://' + fiberyHost + '/api/graphql/space/Project_Management';

    let newLogRequest = await fetch(YOUR_SPACE_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        query: query,
      }),
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Token ${fiberyToken}`,
      },
    });

    if (newLogRequest.status == 200) {
      let log = await newLogRequest.json();

      if (log?.data?.logs?.create?.entities?.length > 0) {
        let logObj = log?.data?.logs?.create?.entities[0];
        let logId = logObj.id;

        let logMessageQuery = `mutation {
          logs(id: {is : "${logId}"}) {
            appendContentToLogMessage(value:"${message}"){message}
          }
        }`;

        let logMessageRequest = await fetch(YOUR_SPACE_ENDPOINT, {
          method: 'POST',
          body: JSON.stringify({
            query: logMessageQuery,
          }),
          headers: {
            'Content-Type': `application/json`,
            Authorization: `Token ${fiberyToken}`,
          },
        });

        if (logMessageRequest.status == 200) {
          return true;
        } else {
          console.error('Could not add Message to log');
          return null;
        }

        return log;
      } else {
        console.error('Could not create log');
        return null;
      }
    } else {
      console.error('Could not connect to fibery');
      return null;
    }
  } catch (error) {
    console.log('error in log message');
    console.log(error);
    return null;
  }
}

class Logger {
  constructor(fiberyHost, fiberyToken, fiberyProjectId) {
    this.fiberyHost = fiberyHost;
    this.fiberyToken = fiberyToken;
    this.fiberyProjectId = fiberyProjectId;
  }

  info(message) {
    log(
      message,
      'info',
      this.fiberyHost,
      this.fiberyToken,
      this.fiberyProjectId
    );
  }
  warn(message) {
    log(
      message,
      'warning',
      this.fiberyHost,
      this.fiberyToken,
      this.fiberyProjectId
    );
  }
  error(message) {
    log(
      message,
      'error',
      this.fiberyHost,
      this.fiberyToken,
      this.fiberyProjectId
    );
  }
}

export default Logger;
