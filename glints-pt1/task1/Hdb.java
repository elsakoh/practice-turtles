import java.util.*;

public class Hdb { 
    static int[][] formatData(List <String> lines, int numRows, int numCols){
        int[][] matrix = new int [numRows][numCols];

        for( int i = 0; i < numRows; i ++) {
            char[] arr =  lines.get(i).toCharArray();
            for(int j = 0; j < numCols; j++) {
             
                matrix[i][j] = arr[j]=='0' ? 0 : 1 ;
            }
        }
        return matrix;
    }
 
    boolean check(int M[][], int row, int col, boolean visited[][], int numRows, int numCols) 
    { 
        //checks if it is in range and whether its already been visited 
        return (row >= 0) && (row < numRows) && (col >= 0) && (col < numCols) && (M[row][col] == 1 && !visited[row][col]); 
    } 

    void DFS(int M[][], int row, int col, boolean visited[][], int numRows, int numCols) 
    { 
         //relative positions for 8 possible neighbours
        int rowNbr[] = new int[] { -1, -1, -1, 0, 0, 1, 1, 1 }; 
        int colNbr[] = new int[] { -1, 0, 1, -1, 1, -1, 0, 1 }; 
  
        visited[row][col] = true; 
  
        for (int k = 0; k < 8; ++k) {
            if (check(M, row + rowNbr[k], col + colNbr[k], visited, numRows, numCols)) {
                //recursion aaaaaaa 
                DFS(M, row + rowNbr[k], col + colNbr[k], visited, numRows,numCols);
            }
        }
    } 
  
   
    int countCluster(int M[][],int numRows, int numCols) 
    { 
        //maintain a visited matrix to keep track of visited cells
        boolean visited[][] = new boolean[numRows][numCols]; 
  
     
        int count = 0; 
        for (int i = 0; i < numRows; i++) 
            for (int j = 0; j < numCols; j++) 
                if (M[i][j] == 1 && !visited[i][j]) // If a cell with 
                { 
                    DFS(M, i, j, visited, numRows, numCols); 
                    count++; 
                } 
  
        return count; 
    } 
  
    public static void main(String[] args)
    { 
        Scanner s = new Scanner(System.in);
        List <String> lines = new ArrayList <String>();
        //bring in the raw data
        while(s.hasNextLine()) {
            lines.add(s.nextLine());
        }
        int numRows = lines.size();
        int numCols =  lines.get(0).toCharArray().length;
        //format data to become 0s and 1s 
        int M [][] = formatData(lines, numRows, numCols);

      
        Hdb redhill = new Hdb(); 
        System.out.println(redhill.countCluster(M, numRows,numCols)); 
    } 
} 