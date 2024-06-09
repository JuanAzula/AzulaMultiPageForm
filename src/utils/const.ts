const getErrorMessage = (error: any) => (typeof error?.message === 'string' ? error.message : null);
export default getErrorMessage;
