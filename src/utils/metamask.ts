declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

/**
 * 获取 metamask 是否安装
 * @returns {Boolean}
 */
export const hasMetamaskInstall = (): boolean => {
  if (window.ethereum || window.ethereum?.isMetaMask) return true;
  return false;
};

/**
 * 获取 metamask 是否链接账户
 * @returns {Boolean}
 */
export const hasMetamaskConnected = (): boolean => {
  if (window.ethereum && window.ethereum?.isConnected()) return true;
  return false;
};

/**
 * 获取默认账号
 * @returns {Promise<String>}
 */
export const getAccountID = async (): Promise<string> => {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });
  return accounts[0];
};

/**
 * 获取所有账号列表
 * @returns {Promise<Array>}
 */
export const getAccount = async (): Promise<Array<any>> => {
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    return accounts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
