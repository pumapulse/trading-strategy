import { Router } from 'express';
import {
  getAllStrategies,
  getStrategyById,
  createStrategy,
  updateStrategy,
} from '../controllers/strategyController.js';

const router = Router();

router.get('/', getAllStrategies);
router.get('/:id', getStrategyById);
router.post('/', createStrategy);
router.put('/:id', updateStrategy);

export default router;
