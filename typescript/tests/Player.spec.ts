import { Player } from '../src/Player';
import { Inventory } from '../src/Inventory';
import { Stats } from '../src/Stats';
import { Damage } from '../src/Damage';
import { SimpleEnemy } from '../src/SimpleEnemy';

describe('Player', () => {
    describe('calculateDamage', () => {
        it('should calculate damage for a player attacking another player', () => {
            // Arrange
            const playerInventory = new Inventory({
                leftHand: { damageModifier: 1 },
                rightHand: { damageModifier: 1 },
                head: { damageModifier: 0.5 },
                feet: { damageModifier: 0.5 },
                chest: { damageModifier: 0.5 },
            });
            const playerStats = new Stats(10);
            const otherPlayerInventory = new Inventory({
                leftHand: { damageModifier: 0.5 },
                rightHand: { damageModifier: 0.5 },
                head: { damageModifier: 0.5 },
                feet: { damageModifier: 0.5 },
                chest: { damageModifier: 0.5 },
            });
            const otherPlayerStats = new Stats(5);
            const player = new Player(playerInventory, playerStats);
            const otherPlayer = new Player(otherPlayerInventory, otherPlayerStats);

            // Act
            const damage = player.calculateDamage(otherPlayer);

            // Assert
            expect(damage).toBeInstanceOf(Damage);
            // Add more assertions based on the expected behavior of calculateDamage
        });

        it('should calculate damage for a player attacking a simple enemy', () => {
            // Arrange
            const playerInventory = new Inventory({
                leftHand: { damageModifier: 1 },
                rightHand: { damageModifier: 1 },
                head: { damageModifier: 0.5 },
                feet: { damageModifier: 0.5 },
                chest: { damageModifier: 0.5 },
            });
            const playerStats = new Stats(10);
            const simpleEnemy = new SimpleEnemy({
                armor: { damageSoak: 5 },
                buffs: [
                    { soakModifier: 1 },
                    { soakModifier: 0.5 },
                ],
            });
            const player = new Player(playerInventory, playerStats);

            // Act
            const damage = player.calculateDamage(simpleEnemy);

            // Assert
            expect(damage).toBeInstanceOf(Damage);
            // Add more assertions based on the expected behavior of calculateDamage
        });

        it('should calculate damage with zero values', () => {
            // Arrange
            const playerInventory = new Inventory({
                leftHand: { damageModifier: 0 },
                rightHand: { damageModifier: 0 },
                head: { damageModifier: 0 },
                feet: { damageModifier: 0 },
                chest: { damageModifier: 0 },
            });
            const playerStats = new Stats(0);
            const target = new Target();
            const player = new Player(playerInventory, playerStats);

            // Act
            const damage = player.calculateDamage(target);

            // Assert
            expect(damage).toBeInstanceOf(Damage);
            // Add more assertions based on the expected behavior of calculateDamage with zero values
        });
    });
});
