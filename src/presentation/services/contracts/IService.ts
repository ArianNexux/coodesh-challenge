export default interface IService{
    handle(id?: any, any?: any): Promise<any>
}