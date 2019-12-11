import { Client } from './client';


export class ClientManager {
    public clients: Client[];

    constructor(clients: Client[]){
        this.clients = clients;
    }

    addNewClient(newClient: Client): void {
        this.clients.push(newClient);
        console.log("New client added susccesfuly. New clients list: ", this.clients);
    }

    getClientsQuantity(): number {
        return this.clients.length;
    }

    printClientBills(clientName: Client["clientName"] ,clientNumber: Client["clientNumber"]): void{
        const clientBills = this.clients.filter((client) => client.clientName === clientName && client.clientNumber === clientNumber);

        console.log(clientBills);
    }
}