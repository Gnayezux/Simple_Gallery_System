package ca.mcgill.ecse321.gallerysystem.service;



import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.stubbing.Answer;

import ca.mcgill.ecse321.gallerysystem.dao.ArtPieceRepository;
import ca.mcgill.ecse321.gallerysystem.dao.ArtistRepository;
import ca.mcgill.ecse321.gallerysystem.dao.UserRepository;
import ca.mcgill.ecse321.gallerysystem.model.ArtPiece;
import ca.mcgill.ecse321.gallerysystem.model.Artist;
import ca.mcgill.ecse321.gallerysystem.model.User;

@ExtendWith(MockitoExtension.class)
public class TestCreateArtPiece {
    @Mock
	private ArtistRepository artistDao;
	@Mock
	private ArtPieceRepository artPieceDao;
	@Mock
	private UserRepository userDao;
	
	@InjectMocks
	private GallerySystemService service;
	
	private static final String ARTIST_KEY = "TestArtist";
	
	@BeforeEach
	public void setMockOutput() {
		lenient().when(artistDao.findArtistByEmail(anyString())).thenAnswer((InvocationOnMock invocation) -> {
			if (invocation.getArgument(0).equals(ARTIST_KEY)) {
				Artist artist = new Artist();
				artist.setEmail(ARTIST_KEY);
				return artist;
			} else {
				return null;
			}
		});
		// Whenever anything is saved, just return the parameter object
		Answer<?> returnParameterAsAnswer = (InvocationOnMock invocation) -> {
			return invocation.getArgument(0);
		};
		lenient().when(artistDao.save(any(Artist.class))).thenAnswer(returnParameterAsAnswer);
		lenient().when(artPieceDao.save(any(ArtPiece.class))).thenAnswer(returnParameterAsAnswer);
		lenient().when(userDao.save(any(User.class))).thenAnswer(returnParameterAsAnswer);
    }
	
	/**
	 * Test to create an artpiece with valid information
	 * IT contains valid name, quantity, price, discount percentage, description, commission, ID, and is \
	 * associated with an artist.
	 */
    @Test
	public void testCreateArtPiece() {
		assertEquals(0, service.getAllArtPieces().size());
		
		String artName = "Riverside Tree";
		Integer quantity = 3;
		float price = 800;
		Integer discountPercentage = 10;
		Float commission = (float) 23.0;
		String description = "tree on a riverside";
		Integer artID = 84356;
		
		
		String userName = "John";
		String email = "john@mail.com";
		String password = "pass";
		Artist artist = service.createArtist(userName, email, password);
		lenient().when(artistDao.existsById(anyString())).thenReturn(true);
		ArtPiece artPiece = null;
		
		try {
			artPiece = service.createArtPiece(artName, quantity, price, discountPercentage, commission, description, artID, email);
		}catch (IllegalArgumentException e) {
			fail();
		}
		checkResultCreateArtPiece(artPiece, artName, quantity, price, discountPercentage, commission, description, artID, userName, email, password);
	}
	
	
	/** 
	 * Verify the result of creating an art piece with the following parameters. 
	 * 
	 * @param artPiece The artPiece object which to perform the verification on.
	 * @param artName The name to be tested with the designated artPiece object to check validity. 
	 * @param quantity The quantity to be tested with the designated artPiece object to check validity.
	 * @param price The price to be tested with the designated artPiece object to check validity.
	 * @param discountPercentage The discount Percentage to be tested with the designated artPiece object to check validity.
	 * @param commissionPercentage The commission percentage to be tested with the designated artPiece object to check validity.
	 * @param description The description to be tested with the designated artPiece object to check validity.
	 * @param artID The ID to be tested with the designated artPiece object to check validity.
	 * @param userName The associated artist's username to be tested with the designated artPiece object to check validity.
	 * @param email The associated artist's email to be tested with the designated artPiece object to check validity.
	 * @param password The associated artist's password to be tested with the designated artPiece object to check validity.
	 */
	private void checkResultCreateArtPiece(ArtPiece artPiece, String artName, Integer quantity, float price, Integer discountPercentage, Float commissionPercentage, String description, Integer artID,
			String userName, String email, String password) {
		assertNotNull(artPiece);
		assertEquals(artName, artPiece.getArtName());
		assertEquals(quantity, artPiece.getQuantity());
		assertEquals(discountPercentage, artPiece.getDiscountPercentage());
		assertEquals(description, artPiece.getDescription());
		assertEquals(artID, artPiece.getArtID());
		assertEquals(userName, artPiece.getArtist().getUserName());
		assertEquals(email, artPiece.getArtist().getEmail());
		assertEquals(password, artPiece.getArtist().getPassword());
		assertEquals((float) commissionPercentage, artPiece.getCommissionPercentage());
	}
	
	/**
	 * Test to create an artpiece with invalid information, such as negative quantity.
	 * The service class is expected to not create any artpiece and throw invalid input exception.
	 */
	@Test
	public void testInvalidCreateArtPiece() {
		assertEquals(0, service.getAllArtPieces().size());
		
		String error = null;
		String artName = "Riverside Tree";
		Integer quantity = -7;
		float price = 800;
		Integer discountPercentage = 10;
		Float commissionPercentage = (float) 24; //To be removed as it is never used.
		String description = "tree on a riverside";
		Integer artID = 84356;
		Float commission = (float) 5.0;
		
		String userName = "John";
		String email = "john@mail.com";
		String password = "pass";
		Artist artist = service.createArtist(userName, email, password);
		lenient().when(artistDao.existsById(anyString())).thenReturn(true);
		ArtPiece artPiece = null;
		
		try {

			artPiece = service.createArtPiece(artName, quantity, price, discountPercentage, commission, description, artID, email);

		} catch (IllegalArgumentException e) {
			error = e.getMessage();
		}
		assertNull(artPiece);
		assertEquals("Invalid Input!", error);
	}
    
}
