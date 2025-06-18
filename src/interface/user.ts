export interface IUser {
    createTime?: string;
    createUser: string;
    dataPermission: string | number;
    file?: string;
    firstName: string;
    lastName: string;
    mfaSecretKey?: string;
    orgId: number;
    orgName?: string;
    password?: string;
    remark?: string;
    roleId: string | number;
    roleName?: string;
    updateTime?: string;
    updateUser?: string;
    userId: string |number;
    userProfile: string
    userStatus: '0' | '1'
    username: string
}
