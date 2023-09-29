import { Player } from '../src/Player';
import { Inventory } from '../src/Inventory';
import { Stats } from '../src/Stats';
import { Damage } from '../src/Damage';
import { SimpleEnemy } from '../src/SimpleEnemy';
import { BasicItem } from '../src/BasicItem';
import { Equipment } from '../src/Equipment';
import { SimpleArmor } from '../src/SimpleArmor';
import { BasicBuff } from '../src/BasicBuff';

describe('Player', () => {
    it('should calculate damage for a player attacking a simple enemy', () => {

        // Create an equipment
        const equipment = new Equipment(
            new BasicItem('Item 1', 10, 1),      // Left hand item: Base damage: 10, Damage modifier: 1
            new BasicItem('Item 2', 15, 0.5),    // Right hand item: Base damage: 15, Damage modifier: 0.5
            new BasicItem('Item 3', 5, 2),       // Head item: Base damage: 5, Damage modifier: 2
            new BasicItem('Item 4', 8, 1.5),     // Feet item: Base damage: 8, Damage modifier: 1.5
            new BasicItem('Item 5', 12, 1.2)
        );

        // Create a sample inventory
        const playerInventory = new Inventory(equipment);

        const playerStats = new Stats(10);
        const player = new Player(playerInventory, playerStats);

        // Create an instance of Armour and Buffs
        const armour = new SimpleArmor(5);
        const buffs = [new BasicBuff(2, 1), new BasicBuff(3, 4)];

        // Create a SimpleEnemy instance
        const simpleEnemy = new SimpleEnemy(armour, buffs);


        // Act
        const damage: Damage = player.calculateDamage(simpleEnemy);

        // Assert
        expect(damage.amount).toBe(330);
    });

    it('should calculate damage with zero values', () => {
    });
});
