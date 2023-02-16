import Logger from './Logger.js';
import getProjectIdByName from './getProjectIdByName.js';

export default {
  Logger,
  getProjectIdByName,
};

export { Logger, getProjectIdByName };

let logger = new Logger(
  'veedoo.fibery.io',
  'eff41760.156aab5142b8ca80d62fb6e6699fc2af8e3',
  '1fbd2d20-9bb9-11ed-a56a-4ba07f01cc89'
);

logger.error('test');
