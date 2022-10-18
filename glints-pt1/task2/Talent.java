
// Java program for stable marriage problem 
import java.util.*;

class Talent {

    static boolean betterJob(int prefer[][], int c, int newjob, int oldjob, int N) {
        // checks if current job is better than new job
        for (int i = 0; i < N; i++) {
            // old job is better
            if (prefer[c][i] == oldjob)
                return true;

            // new job is better
            if (prefer[c][i] == newjob)
                return false;
        }
        return false;
    }

    // formatted such that only one 2D has to be maintained
    // [jobs preference] (rows 0 - N -1 )
    // ------------------------------------
    // [candidate preference] (rows N - 2N-1)
    static int[][] formatData(List<String> lines) {
        int rows = lines.size() - 1;
        int cols = rows / 2;
        int[][] newjob = new int[rows][cols];
        lines.remove((cols));
        for (int i = 0; i < lines.size(); i++) {
            String[] s = lines.get(i).split(" ");
            List<String> strs = new ArrayList<String>(Arrays.asList(s));
            strs.remove(0);
            for (int j = 0; j < lines.size() / 2; j++) {
                String current = strs.get(j);
                current = current.replaceAll("\\D+", "");

                int k = Integer.parseInt(current);
                if (i < cols) {
                    k = k + cols;
                }
                k--;
                newjob[i][j] = k;
            }
        }
        return newjob;
    }

    static void jobmatch(int prefer[][]) {

        int N = prefer.length / 2;
        int applicant[] = new int[N];
        boolean freejobs[] = new boolean[N];
        Arrays.fill(applicant, -1);
        int freeCount = N;

        while (freeCount > 0) {

            int newjob;
            for (newjob = 0; newjob < N; newjob++)
                if (freejobs[newjob] == false)
                    break;
            for (int i = 0; i < N && freejobs[newjob] == false; i++) {
                int c = prefer[newjob][i];
                if (applicant[c - N] == -1) {
                    applicant[c - N] = newjob;
                    freejobs[newjob] = true;
                    freeCount--;
                }

                else {
                    int oldjob = applicant[c - N];

                    if (betterJob(prefer, c, newjob, oldjob, N) == false) {
                        applicant[c - N] = newjob;
                        freejobs[newjob] = true;
                        freejobs[oldjob] = false;
                    }
                }
            }

        }
        for (int i = 0; i < N; i++) {
            System.out.print(" ");
            System.out.println("c" + (i + 1) + "  j" + (applicant[i] + 1));
        }
    }

    // Driver Code
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        List<String> lines = new ArrayList<String>();
        // bring in the raw data
        while (s.hasNextLine()) {
            lines.add(s.nextLine());
        }
        int newjob[][] = formatData(lines);
        jobmatch(newjob);
    }
}

// This code is contributed by Prerna Saini
