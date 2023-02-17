export enum RestaurantEventType {
    TableCountChange = 'tableCountChange',
    Open = 'open',
    Close = 'close',
}

export type RestaurantEvent = (eventName: RestaurantEventType.Open | RestaurantEventType.Close, desc: string ) => boolean
export type RestaurantEventChange = (eventName: RestaurantEventType.TableCountChange, incr: number ) => boolean