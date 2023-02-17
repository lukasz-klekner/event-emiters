import { EventEmitter } from 'events'
import { RestaurantEventType } from './types/tableEvents'

export class Restaurant extends EventEmitter {
  /**
   * Otwarcie restauracji.
   */
  open() {
    // Emit...
    this.emit(RestaurantEventType.Open, 'Opening a restaurant')
  }

  /**
   * Zamknięcie restauracji.
   */
  close() {
    // Emit...
    this.emit(RestaurantEventType.Close, 'Closing a restaurant')
  }

  /**
   * Stolik został zarezerowany na teraz.
   * Traktuj to jako po prostu 1 stolik mniej.
   */
  reserveTable() {
    // Emit...
    this.emit(RestaurantEventType.TableCountChange, -1)
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    // Emit...
    this.emit(RestaurantEventType.TableCountChange, +1)
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    // Emit...
    this.emit(RestaurantEventType.TableCountChange, -1)
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    // Emit...
    this.emit(RestaurantEventType.TableCountChange, -1)
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    // Emit...
    this.emit(RestaurantEventType.TableCountChange, +1)
  }
}