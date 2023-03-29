# Veedoo Logger

adds error loging to fibery Project managment space

## Documentation

[Documentation](https://veedoo.fibery.io/Project_Management/Project/Everyrun-156/Fibery-connect-monitoring-system-to-website-Everyrun.world-695)

# Installation

```bash
  npm i veedoo-logger
```

## Usage/Examples

```javascript
import { Logger, getProjectIdByName } from 'veedoo-logger';

// getProjectIdByName returns project fibery id using the projectName
let projectId = await getProjectIdByName('ProjectName');

//to create a new Logger you must pass it your fibery host, fiberyToken and projectId
let logger = new Logger(fiberyHost, fiberyToken, fiberyProjectId);

//to add an info log
let infoLog = await logger.info('Your Message');

// to add a warning log
let warnLog = await logger.warn('Your Message');

// to add an error log
let errorLog = await logger.error('Your Message');
```

## License

This package is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License
