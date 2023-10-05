import { IChatModel } from './models';

export const ROLE_SYSTEM = 'system';
export const ROLE_ASSISTANT = 'assistant';
export const ROLE_USER = 'user';

export const CHAT_MODEL_NAME_CHATGPT = 'chatgpt';
export const CHAT_MODEL_NAME_CHATGPT4 = 'chatgpt4';
export const CHAT_MODEL_NAME_CHATGPT_16K = 'chatgpt-16k';
export const CHAT_MODEL_NAME_CHATGPT_BROWSING = 'chatgpt-browsing';
export const CHAT_MODEL_NAME_CHATGPT4_BROWSING = 'chatgpt4-browsing';

export const API_ID_CHATGPT = '1d58971c-e3cd-4713-a3ce-854a731adb14';
export const API_ID_CHATGPT_16K = 'bf93bb28-55a7-4428-ad82-156bf410f4e2';
export const API_ID_CHATGPT_BROWSING = '12271e2e-794f-4079-a714-f68dd0df7808';
export const API_ID_CHATGPT4 = '1c4e8fa3-362b-4e0a-b0fd-9ff9fc173b77';
export const API_ID_CHATGPT4_BROWSING = 'a61de51b-d0d0-48a2-9a17-1d4986d5d497';

export const CHAT_MODEL_CHATGPT: IChatModel = {
  apiId: API_ID_CHATGPT,
  name: CHAT_MODEL_NAME_CHATGPT,
  displayName: '基础 - 4k'
};

export const CHAT_MODEL_CHATGPT_16K: IChatModel = {
  apiId: API_ID_CHATGPT_16K,
  name: CHAT_MODEL_NAME_CHATGPT_16K,
  displayName: '基础 - 16k'
};

export const CHAT_MODEL_CHATGPT_BROWSING: IChatModel = {
  apiId: API_ID_CHATGPT_BROWSING,
  name: CHAT_MODEL_NAME_CHATGPT_BROWSING,
  displayName: '基础 - 联网版'
};

export const CHAT_MODEL_CHATGPT4: IChatModel = {
  apiId: API_ID_CHATGPT4,
  name: CHAT_MODEL_NAME_CHATGPT4,
  displayName: 'Plus - 4.0'
};

export const CHAT_MODEL_CHATGPT4_BROWSING: IChatModel = {
  apiId: API_ID_CHATGPT4_BROWSING,
  name: CHAT_MODEL_NAME_CHATGPT4_BROWSING,
  displayName: 'Plus - 4.0 联网版'
};