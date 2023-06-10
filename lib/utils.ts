import md5 from 'md5';

export const encryptPwd = (password: string, username: string) => {
  return md5(`${password}{${username}}`);
};

export const uploadFile = (file: Blob, url: string) => {
  const formData = new FormData();
  formData.append('file', file);
  return fetch(url, {
    method: 'POST',
    body: formData,
  });
};
