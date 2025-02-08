export const getUsers = async (): Promise<boolean> => {
    const response = await fetch('https://mymockapi/getUsers');
    return response.json() as Promise<boolean>;
};
