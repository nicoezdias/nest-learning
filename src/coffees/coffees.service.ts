import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Espresso',
      brand: 'Starbeans',
      flavors: ['Bold', 'Intense'],
    },
    { id: 2, name: 'Latte', brand: 'CoffeeCo', flavors: ['Creamy', 'Mild'] },
    {
      id: 3,
      name: 'Cappuccino',
      brand: 'JavaJoy',
      flavors: ['Rich', 'Frothy'],
    },
    {
      id: 4,
      name: 'Americano',
      brand: 'BeanBlast',
      flavors: ['Smooth', 'Light'],
    },
    {
      id: 5,
      name: 'Mocha',
      brand: 'BrewHaven',
      flavors: ['Chocolatey', 'Sweet'],
    },
    {
      id: 6,
      name: 'Flat White',
      brand: 'RoastMaster',
      flavors: ['Velvety', 'Balanced'],
    },
    {
      id: 7,
      name: 'Cold Brew',
      brand: 'ChillBrew',
      flavors: ['Iced', 'Robust'],
    },
    {
      id: 8,
      name: 'Irish Coffee',
      brand: 'LuckyBeans',
      flavors: ['Whiskey-infused', 'Creamy'],
    },
    {
      id: 9,
      name: 'Turkish Coffee',
      brand: 'EasternBrew',
      flavors: ['Cardamom', 'Strong'],
    },
    {
      id: 10,
      name: 'Macchiato',
      brand: 'TinySips',
      flavors: ['Espresso', 'Hint of Foam'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, createCoffeeDto: any) {
    const existingCoffee = this.findOne(+id);
    if (existingCoffee) {
      //update de existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
