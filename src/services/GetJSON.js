import Api from './api';

export default async () => {
    const response = await fetch(Api);
    const result = await response.json();
    return result;
};
