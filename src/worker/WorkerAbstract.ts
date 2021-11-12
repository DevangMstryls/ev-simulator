import {WorkerData} from '../types/Worker';
import Constants from '../utils/Constants';

export default abstract class WorkerAbstract {
    public abstract size: number;
    public abstract maxElementsPerWorker: number | null;
    protected readonly workerScript: string;
    protected readonly workerStartDelay: number;

    /**
     * `WorkerAbstract` constructor.
     *
     * @param workerScript
     * @param workerStartDelay
     */
    constructor(workerScript: string, workerStartDelay: number = Constants.WORKER_START_DELAY) {
        this.workerScript = workerScript;
        this.workerStartDelay = workerStartDelay;
    }

    public abstract start(): Promise<void>;

    public abstract stop(): Promise<void>;

    public abstract addElement(elementData: WorkerData): Promise<void>;
}
