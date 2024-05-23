import yaml from 'js-yaml';

export default function parseData(data, format) {
  switch (format) {
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      return {};
  }
}