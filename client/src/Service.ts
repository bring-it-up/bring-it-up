export default class Service {
	public readonly serviceName: string = '';
  public readonly location: string = '';
  public readonly school: string = '';
  public readonly organization: string = '';
	public readonly type: string = '';
	public readonly urgency: string = '';
	public readonly targetClients: string[] = [];
	public readonly isAllDay: boolean = false;
	public readonly website: string = '';
	public readonly specialty: string[] = [];
	public readonly isOfferedOnline: boolean = false;
	public readonly delivery: string[] = [];
	public readonly description: string = '';
	public readonly secondaryID: string = '';

	constructor(
		serviceName?: string,
    location?: string,
    school?: string,
    organization?: string,
    type?: string,
    urgency?: string,
    targetClients?: string[],
    isAllDay?: boolean,
    website?: string,
    specialty?: string[],
    isOfferedOnline?: boolean,
    delivery?: string[],
    description?: string,
    secondaryID?: string,
	) {
		this.serviceName = serviceName ?? '';
		this.location = location ?? '';
		this.school = school ?? '';
		this.organization = organization ?? '';
		this.type = type ?? '';
		this.urgency = urgency ?? '';
		this.targetClients = targetClients ?? [];
		this.isAllDay = isAllDay ?? false;
		this.website = website ?? '';
		this.specialty = specialty ?? [];
		this.isOfferedOnline = isOfferedOnline ?? false;
		this.delivery = delivery ?? [];
		this.description = description ?? '';
		this.secondaryID = secondaryID ?? '';
	}
}
