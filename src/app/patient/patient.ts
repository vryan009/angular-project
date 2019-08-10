export class Patient {
    // private id: number;
    // private firstName: string;
    // private middleName: string;
    // private lastName: string;
    // private birthdate: string;
    // private address: string;
    // private contactNumber: string;
    // private img: string;

    constructor(private id: number,
                private firstName: string,
                private middleName: string,
                private lastName: string,
                private birthdate: string,
                private address: string,
                private contactNumber: string,
                private img: string){
    }

    public getId(): number{
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getFirstName(): string{
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getMiddleName(): string{
        return this.middleName;
    }

    public setMiddleName(middleName: string): void {
        this.middleName = middleName;
    }

    public getLastName(): string{
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getBirthDate(): string{
        return this.birthdate;
    }

    public setBirthDate(birthdate: string): void {
        this.birthdate = birthdate;
    }

    public getAddress(): string{
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getContactNumber(): string{
        return this.contactNumber;
    }

    public setContactNumber(contactNumber: string): void {
        this.contactNumber = contactNumber;
    }

    public getImg(): string{
        return this.img;
    }

    public setImg(img: string): void {
        this.img = img;
    }

}