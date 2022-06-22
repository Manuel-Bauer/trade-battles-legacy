const {
  createBattle,
  getMyBattles,
  updateBattle,
} = require('../models/battles.model');
import { Request, Response } from 'express';

exports.getMyBattles = async (req: Request, res: Response): Promise<void> => {
  try {
    const myBattles = await getMyBattles(req.params['user_id']);
    res.send(myBattles);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

exports.postBattle = async (req: Request, res: Response): Promise<void> => {
  try {
    const battle = await createBattle(req.body);
    res.send(battle);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// exports.patchBattleMembers = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const battle = await updateBattleMembers(req.params['battle_id'], req.body);
//     res.send(battle.rows);
//     res.status(200);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// };

exports.updateBattle = async (req: Request, res: Response): Promise<void> => {
  try {
    const battle_id = +req.params['battle_id'];
    const battle = await updateBattle(battle_id, req.body);
    res.send(battle);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
